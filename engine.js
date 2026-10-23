(function(){
// word = syllables as "text:vowel", separated by spaces. Vowel: a e i o u. Text pieces must concatenate to the word.
const RAW = `
שלום=ש:a לום:o
חברים=ח:a ב:e רים:i
חבר=ח:a בר:e
חברה=חב:e רה:a
חברות=ח:a ב:e רות:u
מה=מה:a
נשמע=נש:i מע:a
קורה=קו:o רה:a
אחי=א:a חי:i
אחי=א:a חי:i
אחלה=אח:a לה:a
סבבה=ס:a ב:a בה:a
וואלה=ווא:a לה:a
יאללה=יאל:a לה:a
אני=א:a ני:i
אתה=א:a תה:a
את=את:a
אנחנו=אנ:a חנו:u
אתם=א:a תם:e
הם=הם:e
הן=הן:e
הוא=הוא:u
היא=היא:i
אוהב=או:o הב:e
אוהבת=או:o הב:e ת:e
אותך=או:o תך:a
אותי=או:o תי:i
אותו=או:o תו:o
אותה=או:o תה:a
לא=לא:o
כן=כן:e
כל=כל:o
גם=גם:a
עוד=עוד:o
טוב=טוב:o
טובה=טו:o בה:a
יופי=יו:o פי:i
בבקשה=ב:e ב:a ק:a שה:a
תודה=תו:o דה:a
סליחה=סלי:i חה:a
אמא=א:i מא:a
אבא=א:a בא:a
סבא=ס:a בא:a
סבתא=סב:a תא:a
אח=אח:a
אחות=א:a חות:o
בוקר=בו:o קר:e
ערב=ע:e רב:e
לילה=לי:i לה:a
בוקר=בו:o קר:e
מצוין=מ:e צו:u ין:a
חמוד=ח:a מוד:u
חיים=ח:a יים:i
אהבה=א:a ה:a בה:a
ילד=י:e לד:e
ילדה=יל:a דה:a
ילדים=י:e ל:a דים:i
בית=ב:a ית:i
ספר=ס:e פר:e
מחשב=מח:a שב:e
טלפון=ט:e ל:e פון:o
פלאפון=פ:e לא:e פון:o
שבת=ש:a בת:a
שבוע=ש:a בו:u ע:a
יום=יום:o
מחר=מ:a חר:a
היום=הי:a ום:o
אתמול=את:e מול:o
עכשיו=עכ:a שיו:a
בסדר=ב:e ס:e דר:e
אולי=או:u לי:a/1
בטח=ב:e טח:a
אפשר=אפ:e שר:a
רוצה=רו:o צה:e
יודע=יו:o דע:a
יודעת=יו:o דע:a ת:a
אין=אין:e
יש=יש:e
הכול=ה:a כול:o
הכל=ה:a כל:o
רע=רע:a
יפה=י:a פה:e
גדול=ג:a דול:o
קטן=ק:a טן:a
חם=חם:a
קר=קר:a
מהר=מ:a הר:e
לאט=לאט:a
בנות=ב:a נות:o
בנים=ב:a נים:i
בן=בן:e
בת=בת:a
ישראל=יש:i ר:a אל:e
תל=תל:e
אביב=א:a ביב:i
ירושלים=י:e רו:u ש:a ל:a ים:i
חיפה=חי:e/1 פה:a
עידו=עי:i דו:o
שרון=ש:a רון:o
אריאל=א:a רי:i אל:e
דני=ד:a ני:i
דן=דן:a
יוסי=יו:o סי:i
נועה=נו:o עה:a
מיכל=מי:i כל:a
רונית=רו:o נית:i
אורי=או:o רי:i
גל=גל:a
נועם=נו:o עם:a
איתי=אי:i תי:a/1
אלון=א:a לון:o
תמר=ת:a מר:a
דנה=ד:a נה:a
יובל=יו:o בל:a
עומר=עו:o מר:e
רועי=רו:o עי:i
מתן=מ:a תן:a
שיר=שיר:i
ליאור=לי:i אור:o
אסף=א:a סף:a
אמיר=א:a מיר:i
רוני=רו:o ני:i
בר=בר:a
שני=ש:a ני:i
יעל=י:a על:e
נעמה=נ:a ע:a מה:a
צירין=צי:i רין:i
עם=עם:i
על=על:a
של=של:e
אל=אל:e
זה=זה:e
זאת=זאת:o
אז=אז:a
אבל=א:a בל:a
כי=כי:i
אם=אם:i
או=או:o
מי=מי:i
איך=איך:e
למה=ל:a מה:a
מתי=מ:a תי:a/1
איפה=אי:e/1 פה:o
כמה=כ:a מה:a
בואו=בו:o או:u
בוא=בוא:o
תבוא=ת:a בוא:o
יאללה=יאל:a לה:a
ביי=ביי:a/2
שלומך=ש:a לו:o מך:a
חג=חג:a
שמח=ש:a מח:e
שמחה=שמ:i חה:a
מזל=מ:a זל:a
טוב=טוב:o
נהדר=נה:a דר:a
אוכל=או:o כל:e
מים=מ:a ים:i
קפה=ק:a פה:e
בירה=בי:i רה:a
פיצה=פי:i צה:a
כסף=כ:e סף:e
עבודה=עב:a ו:o דה:a
אוניברסיטה=או:u ני:i בר:e סי:i טה:a
`;
const LEXICON                                                        = {};
for (const line of RAW.trim().split('\n')) {
    const [w, rest] = line.split('=');
    if (!w || !rest) continue;
    const parts = rest.trim().split(/\s+/).map((p) => { const [t, vk] = p.split(':'); const [v, k] = vk.split('/'); return { t, v, k: k === undefined ? -1 : Number(k) }; });
    if (parts.map((p) => p.t).join('') === w) LEXICON[w] = parts;
}


                                                
// t = the whole syllable as written, k = number of trailing letters that are a closing consonant (coda)
                                                       
                                                                  
                                                         

const NIQQUD = /[\u0591-\u05C7]/g;
const FINAL                         = { 'ך': 'כ', 'ם': 'מ', 'ן': 'נ', 'ף': 'פ', 'ץ': 'צ' };
const isHeb = (s        ) => /[\u05D0-\u05EA]/.test(s);
const tokenize = (s        ) => s.split(/([\u05D0-\u05EA\u0591-\u05C7]+)/).filter((x) => x !== '');
function clean(word        ) { return word.replace(NIQQUD, ''); }

function fromLexicon(w        )               {
    const e = LEXICON[w];
    if (!e) return null;
    return e.map((p) => { const a = analyzeUnits(p.t); return { t: p.t, v: p.v         , k: p.k >= 0 ? p.k : a.length === 1 ? a[0].k : 0 }; });
}

function analyzeUnits(w        )        {
    return rules(w).syls;
}

function rules(w        )                                    {
    const units                                   = [];
    let guessed = false;
    for (let i = 0; i < w.length; i++) {
        const L = w[i];
        const prev = units[units.length - 1];
        if (L === 'ו' && prev && prev.v === null && i > 0) { prev.t += L; prev.v = 'o'; continue; }
        if (L === 'י' && prev && prev.v === null && i > 0) { prev.t += L; prev.v = 'i'; continue; }
        if ((L === 'ה' || L === 'א' || L === 'ע') && i === w.length - 1 && prev) {
            prev.t += L;
            if (prev.v === null) prev.v = 'a';
            continue;
        }
        units.push({ t: L, v: null });
    }
    const syls        = [];
    let lastGuess = '';
    let prevGuessed = false;
    units.forEach((u, j) => {
        if (u.v === null) {
            if (j === units.length - 1 && j > 0 && syls.length > 0) {
                const last = syls[syls.length - 1];
                last.t += u.t; last.k += 1; return;
            }
            const prevU = units[j - 1];
            if (j > 0 && syls.length > 0 && prevU && prevU.v !== null && !prevGuessed && j < units.length - 1 && units[j + 1].v !== null) {
                // medial cluster after a vowel written in the spelling: closes the previous syllable (vik-tor)
                const last = syls[syls.length - 1];
                last.t += u.t; last.k += 1; guessed = true; return;
            }
            const nextIsCoda = j === units.length - 2 && units[j + 1].v === null;
            u.v = !nextIsCoda && lastGuess === 'a' ? 'e' : 'a';
            lastGuess = u.v;
            guessed = true;
            prevGuessed = true;
        } else { lastGuess = ''; prevGuessed = false; }
        syls.push({ t: u.t, v: u.v, k: 0 });
    });
    return { syls, guessed };
}

const PREFIX                      = {
    'ה': { t: 'ה', v: 'a', k: 0 }, 'ב': { t: 'ב', v: 'e', k: 0 }, 'ל': { t: 'ל', v: 'e', k: 0 },
    'כ': { t: 'כ', v: 'e', k: 0 }, 'מ': { t: 'מ', v: 'e', k: 0 }, 'ש': { t: 'ש', v: 'e', k: 0 }, 'ו': { t: 'ו', v: 'e', k: 0 },
};

const VOWEL_MARK                        = {
    '\u05B7': 'a', '\u05B8': 'a', '\u05B2': 'a', '\u05B3': 'o', '\u05B6': 'e', '\u05B5': 'e', '\u05B1': 'e',
    '\u05B4': 'i', '\u05B9': 'o', '\u05BA': 'o', '\u05BB': 'u',
};
const hasVowelMarks = (s        ) => /[\u05B1-\u05BB]/.test(s);

function pointed(raw        )        {
    const toks                                                    = [];
    for (const ch of Array.from(raw)) {
        if (/[\u05D0-\u05EA]/.test(ch)) toks.push({ L: ch, v: null, dagesh: false });
        else if (toks.length) {
            const t = toks[toks.length - 1];
            if (VOWEL_MARK[ch]) t.v = VOWEL_MARK[ch];
            if (ch === '\u05BC') t.dagesh = true;
        }
    }
    const units                                                   = [];
    toks.forEach((tk, i) => {
        const prev = units[units.length - 1];
        if (tk.L === 'ו' && prev && prev.v === null && !prev.mater && (tk.v === 'o' || (tk.v === null && tk.dagesh))) {
            prev.t += tk.L; prev.v = tk.v === 'o' ? 'o' : 'u'; prev.mater = true; return;
        }
        if (tk.L === 'י' && prev && !prev.mater && (prev.v === 'i' || prev.v === 'e') && tk.v === null) { prev.t += tk.L; prev.mater = true; return; }
        if (i === toks.length - 1 && 'הא'.includes(tk.L) && tk.v === null && prev && prev.v !== null) { prev.t += tk.L; return; }
        units.push({ t: tk.L, v: tk.v, mater: false });
    });
    const syls        = [];
    units.forEach((u, j) => {
        if (u.v === null) {
            if (j > 0 && syls.length > 0) { const last = syls[syls.length - 1]; last.t += u.t; last.k += 1; return; }
            u.v = 'e';
        }
        syls.push({ t: u.t, v: u.v, k: 0 });
    });
    return syls;
}

function analyze(raw        )           {
    if (hasVowelMarks(raw)) {
        const p = pointed(raw);
        if (p.length) return { syls: p, source: 'pointed' };
    }
    const w = clean(raw);
    const lex = fromLexicon(w);
    if (lex) return { syls: lex, source: 'lexicon' };
    if (w.length > 2 && PREFIX[w[0]]) {
        const rest = fromLexicon(w.slice(1));
        if (rest) return { syls: [{ ...PREFIX[w[0]] }, ...rest], source: 'lexicon' };
    }
    const r = rules(w);
    return { syls: r.syls, source: r.guessed ? 'guess' : 'spelling' };
}

function pieceToSyl(piece        )      {
    const s = rules(piece).syls;
    return { t: piece, v: s[0]?.v ?? 'a', k: s.length === 1 ? s[0].k : s.length ? s[s.length - 1].k : 0 };
}

const PLAIN                        = { a: 'גא', e: 'גה', i: 'גי', o: 'גו', u: 'גו' };
const POINTED                        = { a: 'גַ', e: 'גֶ', i: 'גִי', o: 'גוֹ', u: 'גוּ' };

// The "g" goes right after the vowel, before any closing consonant: shalom -> sha-ga-lo-go-m
function toGimel(syls       , pointed         )         {
    const map = pointed ? POINTED : PLAIN;
    const joined = syls.map((s) => {
        const core = s.t.slice(0, s.t.length - s.k);
        const coda = s.t.slice(s.t.length - s.k);
        return core + map[s.v] + coda;
    }).join('');
    const chars = Array.from(joined);
    return chars.map((c, i) => (i < chars.length - 1 && FINAL[c] ? FINAL[c] : c)).join('');
}

window.GE={analyze,pieceToSyl,toGimel,tokenize,isHeb,clean};
})();
