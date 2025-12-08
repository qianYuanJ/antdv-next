import type { App } from 'vue'
import Card from './Card'
import Grid from './Grid'
import Meta from './Meta'

export type { CardEmits, CardProps, CardSize, CardSlots, CardTabListType } from './Card'

export type { CardGridProps } from './Grid'
export type { CardMetaProps } from './Meta'

(Card as any).Grid = Grid;
(Card as any).Meta = Meta;
(Card as any).install = (app: App) => {
  app.component(Card.name, Card)
  app.component(Grid.name, Grid)
  app.component(Meta.name, Meta)
}

export const CardMeta = Meta
export const CardGrid = Grid
export default Card
