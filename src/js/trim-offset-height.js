import { createTrimmedText } from "./helpers/create-trimmed-text";

const VISIBLE_TEXT_SYMBOLS_NUMBER = 55;

const titles = document.querySelectorAll(".js-trim-text");

createTrimmedText(titles, VISIBLE_TEXT_SYMBOLS_NUMBER);
