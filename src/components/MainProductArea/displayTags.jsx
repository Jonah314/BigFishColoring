import React from 'react'
import {ProductArray} from '../../productArray.js';


function displayTags(onSendTag){
const tagMap = new Map();

for (const prod in ProductArray) {
  const tags = ProductArray[prod].Tags;
  if (!tags) continue;

  for (const tag of tags) {
    tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
  }
}

 const tagArr = Array.from(tagMap, ([name, count]) => ({ name, count }));
//filter Tag Labels so the highest Tag account gets rendered
 const popularTags = tagArr.filter(t => t.count>1);
//Organize Tag Labels aplabeticaly
const organizedTags = popularTags.sort((a,b)=> a.name.localeCompare(b.name));

  return organizedTags.map((tag) => (
    <li key={tag.name}>
      <button onClick={() => onSendTag(tag.name)}>
        {tag.name}
      </button>
    </li>
  ));
}

export default displayTags;