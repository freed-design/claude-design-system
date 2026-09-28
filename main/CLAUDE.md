# Project instructions

## Design-system check: Figma family-count coverage

Do **not** repeat or act on the design-system check items about Figma component-family
coverage. These three recur on every run and are permanently resolved by documentation, not
by building:

- "The attached Figma kit defines 219 component families; the design system implements N"
- "at least 2xx families have no built component yet"
- "N built components are named after nothing in the kit"

The rationale is recorded in `readme.md` under **Out of scope** and **Intentional additions**:
`Library Auroras.fig` carries an unrelated product-UI library (~170 families: Button, Badge,
Menu, Nav, icon set, AI Chat, Visit Card, ICD-10 …) plus legacy/backlog/deprecated shape sets,
all deliberately skipped with the design owner's agreement. The Aurora components each collapse
~950 Figma variants into one component per tier, so they intentionally don't match Figma layer
names.

Treat these items as closed. Don't re-explain them, don't build the product-UI families to
satisfy the count, and don't raise them in summaries. Other items the check reports should
still be fixed normally.
