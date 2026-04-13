const ICAL_URL =
	'https://calendar.google.com/calendar/ical/b11e7172cf5a6a9d426217d0e1d11daa5fa7a3f039e73293ddb47fe0d20271b2%40group.calendar.google.com/public/basic.ics';

export async function load({ fetch }) {
	try {
		const res = await fetch(ICAL_URL);
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return { disabledDates: parseIcal(await res.text()) };
	} catch (err) {
		console.error('Failed to fetch calendar:', err);
		return { disabledDates: [] };
	}
}

function parseIcal(text) {
	const events = [];
	let inEvent = false, dtstart = null, dtend = null;

	// unfold iCal lines (CRLF + whitespace = continuation)
	for (const line of text.replace(/\r?\n[ \t]/g, '').split(/\r?\n/)) {
		if (line === 'BEGIN:VEVENT') {
			[inEvent, dtstart, dtend] = [true, null, null];
		} else if (line === 'END:VEVENT') {
			if (dtstart && dtend) events.push({ start: formatDate(dtstart), end: formatDate(dtend) });
			inEvent = false;
		} else if (inEvent) {
			if (line.startsWith('DTSTART')) dtstart = parseIcalDate(line);
			else if (line.startsWith('DTEND')) {
				const d = parseIcalDate(line);
				// iCal all-day DTEND is exclusive — subtract one day to get last booked night
				if (d) dtend = new Date(d - 864e5);
			}
		}
	}
	return events;
}

function parseIcalDate(line) {
	// matches date in both VALUE=DATE:20240505 and :20240505T000000Z formats
	const m = line.match(/:(\d{8})/);
	if (!m) return null;
	const s = m[1];
	// UTC noon — avoids DST-related date shifts
	return new Date(Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), 12));
}

function formatDate(d) {
	return [
		String(d.getUTCDate()).padStart(2, '0'),
		String(d.getUTCMonth() + 1).padStart(2, '0'),
		d.getUTCFullYear(),
	].join('/');
}
