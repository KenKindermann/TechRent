import { createClient } from "contentful";

const fetchData = async (key) => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE,
    environment: "master",
    accessToken: import.meta.env.VITE_ACCESSTOKEN,
  });

  try {
    return client
      .getEntries({ content_type: key })
      .then((res) => res.items)
      .catch(console.error);
  } catch (error) {
    console.log("Error");
  }
};

export default fetchData;
