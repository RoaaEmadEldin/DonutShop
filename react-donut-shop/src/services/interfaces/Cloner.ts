export default interface Cloneable<T> {
  clone(entity: T): T;
}
