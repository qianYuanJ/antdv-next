export type UseCSP = () => {
  nonce?: string
}

const useDefaultCSP: UseCSP = () => ({})

export default useDefaultCSP
