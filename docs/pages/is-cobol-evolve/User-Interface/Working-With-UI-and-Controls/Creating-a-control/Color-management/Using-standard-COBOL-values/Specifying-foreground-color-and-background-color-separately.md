#### Specifying foreground color and background color separately

When an color value is used with a property that defines either the foreground color or the background color, the value can be only 0 to 15 and the corresponding color is applied to foreground or background. The table below shows the possible values for BACKGROUND-COLOR and FOREGROUND-COLOR properties.

```cobol
0 Black
1 Blue
2 Green
3 Cyan
4 Red
5 Magenta
6 Brown
7 White
8 Dark Gray
9 Bright Blue
10 Bright Green
11 Bright Cyan
12 Bright Red
13 Bright Magenta
14 Yellow
15 Bright White
```

Brightness can be also affected by the following clauses:

```cobol
BACKGROUND-HIGH
BACKGROUND-LOW
BACKGROUND-STANDARD
HIGHLIGHT
LOWLIGHT
STANDARD
```

For example, a "BACKGROUND-COLOR 4 BACKGROUND-HIGH" is equivalent to "BACKGROUND-COLOR 12". Both syntaxes shows an high intensity red background.

When the REVERSE-VIDEO phrase is specified, background and foreground colors are swapped.

When the SAME phrase is specified, the whole screen item for which it is specified is displayed with the same colors and attributes of the screen position occupied by its first character.

This kind of color value is suitable for

- the BACKGROUND-COLOR and FOREGROUND-COLOR clauses of the [DISPLAY](../../../../../Language-Reference/Procedure-Division-Statements/DISPLAY) statement,
- the [Background-Color](../../../../../Appendices/Graphical-Control-list) and [Foreground-Color](../../../../../Appendices/Graphical-Control-list) properties of each control,
- the following special properties:
  - [Active-Tab-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Acrtive-Tab-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Cell-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Cell-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Cell-Current-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Cell-Current-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Cell-Entry-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Cell-Entry-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Cell-Selected-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Cell-Selected-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Colors](../../../../../Appendices/Graphical-Control-list)
  - [Column-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Column-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Column-Selected-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Column-Selected-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Cursor-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Cursor-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Disabled-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Disabled-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Drag-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Drag-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Heading-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Heading-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Heading-Cursor-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Heading-Cursor-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Item-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Item-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Panel-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Panel-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Region-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Region-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Rollover-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Rollover-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Row-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Row-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Row-Background-Color-Pattern](../../../../../Appendices/Graphical-Control-list) and [Row-Foreground-Color-Pattern](../../../../../Appendices/Graphical-Control-list)
  - [Row-Cursor-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Row-Cursor-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Row-Selected-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Row-Selected-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Selection-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Selection-Foreground-Color](../../../../../Appendices/Graphical-Control-list)
  - [Tab-Background-Color](../../../../../Appendices/Graphical-Control-list) and [Tab-Foreground-Color](../../../../../Appendices/Graphical-Control-list)

When these colors are set to 0, the default color is restored.
