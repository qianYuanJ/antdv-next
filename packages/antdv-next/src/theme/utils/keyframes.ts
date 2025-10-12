export class Keyframes {
  name: string
  value: Record<string, any>

  constructor(name: string, value: Record<string, any>) {
    this.name = name
    this.value = value
  }
}
