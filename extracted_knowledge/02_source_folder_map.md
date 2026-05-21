# Source Folder Map

This map aligns the expected business folders mentioned in the request with the actual folders and files currently present in `/Users/admin/code/vipul/fam`.

## Requested-to-Actual Mapping

| Requested / Expected Item | Actual Workspace Match | Status | Notes |
|---|---|---|---|
| `fam / finance audit management folder` | `/Users/admin/code/vipul/fam` | Present | Root repository folder. |
| `BRD document` | `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md` | Present | Primary BRD markdown file. |
| `GenAI intake deck folder` | `/Users/admin/code/vipul/fam/raw-docs/genai-intake-deck` | Present | Contains 6 `.JPG` slide images. |
| `miscellaneous folder` | `/Users/admin/code/vipul/fam/raw-docs/misc` | Present | Contains 5 `.JPG` files. |
| `meeting notes` | No direct folder or file match found | Not found | No obvious meeting-notes directory or note file currently exists. |
| `brainstorming notes` | No direct folder or file match found | Not found | No obvious brainstorming-notes directory or note file currently exists. |
| `Ravi slides` | `/Users/admin/code/vipul/fam/raw-docs/ravi-slides` | Present | Contains 4 `.JPG` slide images. |
| `raw data sneak peek` | `/Users/admin/code/vipul/fam/raw-docs/raw-data-sneak-peek` | Present | Contains 18 `.JPG` files. |
| `rose updates` | `/Users/admin/code/vipul/fam/raw-docs/sh-rose-updates` | Present | Folder name appears normalized with `sh-` prefix. |

## Additional Source Folders Present

These folders were present in the workspace even though they were not explicitly called out in the request:

- `/Users/admin/code/vipul/fam/raw-docs/current-arch-diagrams`
- `/Users/admin/code/vipul/fam/.git`
- `/Users/admin/code/vipul/fam/extracted_knowledge`

## Raw Asset Counts

| Folder | Asset Count | File Type |
|---|---:|---|
| `raw-docs/current-arch-diagrams` | 2 | `.JPG` |
| `raw-docs/genai-intake-deck` | 6 | `.JPG` |
| `raw-docs/misc` | 5 | `.JPG` |
| `raw-docs/ravi-slides` | 4 | `.JPG` |
| `raw-docs/raw-data-sneak-peek` | 18 | `.JPG` |
| `raw-docs/sh-rose-updates` | 3 | `.JPG` |

## Observations

- The workspace is currently document-centric rather than application-code-heavy.
- The BRD is already available as structured markdown, which makes it the best primary source for requirements extraction.
- Most other source materials are image-based, which suggests follow-on OCR or transcription work may be useful if deeper content extraction is needed later.
