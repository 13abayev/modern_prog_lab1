# Lab 1 report: Type systems and language safety

| | |
| --- | --- |
| Name | Cəbrayıl Babayev |
| GitHub | 13abayev |
| Partner | — |

## Status

All core tasks are done. Every file was checked with the TypeScript compiler in strict mode and run.

| File | Type errors | Result |
| --- | --- | --- |
| `00_warmup_predict.ts` | — | warm-up, answers written as comments |
| `01_narrowing.ts` | 0 | 9 PASS |
| `02_unions_illegal_states.ts` | 0 | 5 PASS (Task 3 included) |
| `03_generics.ts` | 0 | 5 PASS |
| `04_minilang_typechecker.ts` | 0 | 9 PASS |

Stretch tasks in `04`: S1 (evaluator) and S2 (`==` with the T-Eq rule) are done too.
The questions asked in the files are answered as comments next to the code.

## Exit ticket

1. A type checker proves that a certain class of errors cannot happen, not that the program is correct: `label(0)` and warm-up cases 2 and 3 type-check and are still wrong.
2. When states are a discriminated union, adding a new state makes the compiler point at every place that must change; with a "bag of optional fields" that search is manual.

## AI use

I used **Claude Code**, Anthropic's AI coding assistant, for this lab. It wrote the solutions to all tasks (00 to 04, including stretch S1 and S2), the answer comments in the files and this report, and made the commits.
