"use client";

import { db } from "../../app/[locale]/firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

async function getFavoriteCities(userId) {
  const col = collection(db, "city");
  const snapshot = await getDocs(col);
  let cityList = [];
  snapshot.docs.map((doc) => {
    if (doc.data().userId === userId) {
      cityList.push({
        id: doc.id,
        ...doc.data(),
      });
    }
  });
  return cityList;
}

async function addCityToFavorites(cityName, userId) {
  const col = collection(db, "city");
  addDoc(col, {
    name: cityName,
    userId,
  });
}

async function removeCityFromFavorites(cityId) {
  const ref = doc(db, "city", cityId);
  deleteDoc(ref)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
}

export { getFavoriteCities, addCityToFavorites, removeCityFromFavorites };
