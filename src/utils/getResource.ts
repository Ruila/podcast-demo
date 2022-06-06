import { resourceData } from "@/resource";
import type { ResourceDataType } from "@/types/ResourceDataType";

export const getResource = (): ResourceDataType => {
  const data: ResourceDataType = {};
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(resourceData, "text/xml");
  const items = Array.from(xmlDoc.getElementsByTagName("item"));
  items.forEach((item) => {
    const key = item
      .getElementsByTagName("title")[0]
      .textContent?.split("|")[0]
      .trim()
      .slice(2) as string;
    data[key] = {
      title: item.getElementsByTagName("title")[0].textContent as string,
      author: item.getElementsByTagName("itunes:author")[0]
        .textContent as string,
      imgUrl: item
        .getElementsByTagName("itunes:image")[0]
        .getAttribute("href") as string,
      musicUrl: item
        .getElementsByTagName("enclosure")[0]
        .getAttribute("url") as string,
      summary: item.getElementsByTagName("itunes:summary")[0]
        .textContent as string,
      publish_date: item.getElementsByTagName("pubDate")[0]
        .textContent as string,
    };
  });
  return data;
};
