# Riddler

A proposed 40% split ortholinear layout to go on a diy Let's Split PCB.

The layout.json does not match the layout.ascii file at this stage, as it's
still very much a work in progress, and I'm finding it easier to play around in
the ascii file rather than in QMK configurator or keyboard layout editor.

Specs:

| Component | Details                            |
|:----------|:-----------------------------------|
| PCB       | [Let's Split][PBC]                 |
| Switches  | Kailh Box                          |
| Case      | [PCB Case][case]                   |

## Layouts

* [Initial Layout Design][layout]
* [Alt Layout Design][alt]

## Costs

This was a board built from sourced components. You can see a
cost breakdown in the [costs][costs] file

## Usage

Upload the layout.json file into [QMK Configurator][conf], then hit compile and download
the firmware and flash it to your board.

[conf]: https://config.qmk.fm/
[PCB]: https://github.com/climbalima/let-s-Split-v2
[Case]: https://git.40percent.club/di0ib/Misc/src/branch/master/split%20plates
[layout]: https://github.com/deanacus/keyboards/tree/master/riddler/layout.md
[alt]: https://github.com/deanacus/keyboards/tree/master/riddler/layout_alt.md
[alt]: https://github.com/deanacus/keyboards/tree/master/riddler/costs.md