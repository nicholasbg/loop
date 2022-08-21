// function loop(
//   callback: (item: unknown, key?: loopKey) => unknown,
//   collection: Iterable<unknown> | {[key: string | symbol]: unknown},
// ) {
//   const collectionObject = Object(collection);

//   return Object.entries(
//     Symbol.iterator in collectionObject
//       ? Array.from(collection as Iterable<unknown>)
//       : collectionObject,
//   ).find(([index, value]) => callback(value, index));
// }

function loop(callback, collection) {
  const collectionObject = Object(collection);

  return Object.entries(
    Symbol.iterator in collectionObject
      ? Array.from(collection)
      : collectionObject,
  ).find(([index, value]) => callback(value, index));
}
