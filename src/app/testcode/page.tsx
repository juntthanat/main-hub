"use client";
import {useState, useEffect, KeyboardEvent} from "react";


export default function TestCode() {
  const [searchTitleInput, setSearchTitleInput] = useState(String);
  const [mangaTitle, setMangaTitle] = useState(String);
  const [coverImage, setCoverImage] = useState(String);

  const [mangaTitleList, setMangaTitleList] = useState();
  const [mangaCoverList, setMangaCoverList] = useState();
  const [showMangaList, setShowMangeList] = useState();

  const [addingHTML, setAddingHTML] = useState();

  interface mangaRelationship {
    id: number;
    type: String;
    related: String;
  }

  const baseUrl: String = "https://api.mangadex.org";
  const baseUrlCoverImage: String = "https://uploads.mangadex.org/covers"; //https://uploads.mangadex.org/covers/:manga-id/:cover-filename

  useEffect(()=>{
    if (searchTitleInput != undefined) {
      getMangaTitle();
      getMangaCoverImage();
      getMangaList();
    }
  }, [searchTitleInput])

  const getManga = async () => {
    return await fetch(
      `${baseUrl}/manga?title=${encodeURIComponent(searchTitleInput)}`
    ).then((e) => e.json());
  };

  const getCoverImageFileName = async (coverImageId: String) => {
    return await fetch(`${baseUrl}/cover/${coverImageId}`).then((e) =>
      e.json()
    );
  };
  const getCoverImage = async (mangaId: String, coverImageFileName: String) => {
    return await fetch(`${baseUrlCoverImage}/${mangaId}/${coverImageFileName}`);
  };
  const getMangaCoverImage = async () => {
    const res = await getManga();
    const mangaId: String = res.data[0].id;
    console.log(res.data[0].relationships);
    const coverImageId: String = res.data[0].relationships.find(
      (relationship: mangaRelationship) => relationship.type === "cover_art"
    ).id;
    const coverImageFileName = (await getCoverImageFileName(coverImageId)).data
      .attributes.fileName;
    setCoverImage((await getCoverImage(mangaId, coverImageFileName)).url);
  };
  const getMangaTitle = async () => {
    setMangaTitle(
      (
        await fetch(
          `${baseUrl}/manga?title=${encodeURIComponent(searchTitleInput)}`
        ).then((e) => e.json())
      ).data[0].attributes.title.en
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchTitleInput(event.currentTarget.value);
    }
  };

  const getMangaList = async () => {
    const res = await getManga();
    const mangaCoverList = [];
    setMangaTitleList(res);
    console.log(res.data.length);
    // for(let resIndex = 0; resIndex < res.data.length; resIndex++){
    for (let resIndex = 0; resIndex < res.data.length; resIndex++) {
      mangaCoverList.push(
        (
          await getCoverImage(
            res.data[resIndex].id,
            (
              await getCoverImageFileName(
                res.data[resIndex].relationships.find(
                  (relationship: mangaRelationship) => relationship.type === "cover_art"
                ).id
              )
            ).data.attributes.fileName
          )
        ).url
      );
    }

    setShowMangeList(
      <div>
        <img alt="Manga Cover" className="cover" src={mangaCoverList[0]} />
        <img alt="Manga Cover" className="cover" src={mangaCoverList[1]} />
        <img alt="Manga Cover" className="cover" src={mangaCoverList[2]} />
        <img alt="Manga Cover" className="cover" src={mangaCoverList[3]} />
        <img alt="Manga Cover" className="cover" src={mangaCoverList[4]} />
        <img alt="Manga Cover" className="cover" src={mangaCoverList[5]} />
      </div>
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Manga"
        onKeyDown={handleKeyDown}
      ></input>
      <div>
        <img alt="Manga Cover" className="cover" src={coverImage} />
        <div>{mangaTitle}</div>
        <div>
          {addingHTML}
          {showMangaList}
        </div>
      </div>
    </>
  );
}
}

// MangaDex API Test Step
// More Info https://api.mangadex.org/docs/swagger.html#/Cover/get-cover-id

//! Fetch MangaList
// fetch('https://api.mangadex.org/manga').then(e => e.json()).then(data => console.log(data))
//* Result
// {result: 'ok', response: 'collection', data: Array(10), limit: 10, offset: 0, …}
// path to manga id
/// data[#].id

//! To get Manga Cover We need to use the manga id to get the manga cover
// https://api.mangadex.org/cover/{manga id}
//* Result
// "result": "ok",
// "response": "entity",
// "data": {
//     "id": "0776cf5e-d4e0-4f33-98d1-51a28f66fa34",
//     "type": "cover_art",
//     "attributes": {
//         "description": "",
//         "volume": null,
//         "fileName": "24cf7637-66fd-4c35-9a0d-be3d66922e67.jpg",
//         "locale": "ja",
//         "createdAt": "2021-05-24T16:46:45+00:00",
//         "updatedAt": "2021-05-24T16:46:45+00:00",
//         "version": 1
//     },
//     "relationships": [
//         {
//             "id": "e5014f00-199b-493f-a8dc-8b8c939bb00f",
//             "type": "manga"
//         },
//         {
//             "id": "f8cc4f8a-e596-4618-ab05-ef6572980bbf",
//             "type": "user"
//         }
//     ]
// }