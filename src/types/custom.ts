export interface PetStats {
  cool: number,
  cute: number,
  confidence: number,
  control: number,
}

export interface Pet {
  animal: string,
  nickname: string,
  color: string,
  colorHex: string,
  owner: string,
  shiny: boolean,
  traits: string[][],
  star: number,
  id: string,
  stats: PetStats
}
