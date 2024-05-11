"use client";

import { db } from "../../app/[locale]/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

async function getFavoriteCities(userId) {
  //   const favoriteCitiesRef = db
  // .collection("users")
  // .doc(userId)
  // .collection("favoriteCities");

  const docRef = doc(db, "users", "favoriteCities");
  const user = await getDoc(docRef);
  console.log(user);

  //   const snapshot = await favoriteCitiesRef.get();
  //   const favoriteCities = [];
  //   snapshot.forEach((doc) => {
  //     favoriteCities.push({ id: doc.id, ...doc.data() });
  //   });
  //   return favoriteCities;
}

async function addCityToFavorites(userId, cityName) {
  await setDoc(
    doc(db, "favoriteCities", userId),
    { cityName },
    {
      merge: true,
    }
  );
}

async function removeCityFromFavorites(userId, cityId) {
  const favoriteCityRef = db
    .collection("users")
    .doc(userId)
    .collection("favoriteCities")
    .doc(cityId);
  await favoriteCityRef.delete();
}

export { getFavoriteCities, addCityToFavorites, removeCityFromFavorites };
