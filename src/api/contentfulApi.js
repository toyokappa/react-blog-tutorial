import axios from "axios";

const spaceId = "rlz1oc4sgyfk";
const accessToken = "f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a";

const getEntries = () => {
  const url = `https://cdn.contentful.com/spaces/${spaceId}/entries`;
  return axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

const getEntry = entryId => {
  const url = `https://cdn.contentful.com/spaces/${spaceId}/entries/${entryId}`;
  return axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

const getAsset = assetId => {
  const url = `https://cdn.contentful.com/spaces/${spaceId}/assets/${assetId}`;
  return axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

export { getEntries, getEntry, getAsset };
