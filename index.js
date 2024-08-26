import got from "got";
import fs from "fs";

(async () => {
  try {
    const response = await got("https://jsonplaceholder.typicode.com/posts/1");
    console.log("GET Request:");
    console.log(response.body);
  } catch (error) {
    console.error("Error in GET request:", error.message);
  }
})();

(async () => {
  try {
    const response = await got.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        json: {
          title: "foo",
          body: "bar",
          userId: 1,
        },
        responseType: "json",
      }
    );
    console.log("POST Request:");
    console.log(response.body);
  } catch (error) {
    console.error("Error in POST request:", error.message);
  }
})();

(async () => {
  try {
    const response = await got("https://nonexistent-url.com");
    console.log(response.body);
  } catch (error) {
    console.error("Error handling example:", error.message);
  }
})();

(async () => {
  try {
    const response = await got("https://jsonplaceholder.typicode.com/posts/1", {
      headers: {
        "User-Agent": "My-Custom-Agent",
      },
      searchParams: {
        userId: 1,
      },
      timeout: 5000,
    });
    console.log("Customized Request:");
    console.log(response.body);
  } catch (error) {
    console.error("Error in customized request:", error.message);
  }
})();

(async () => {
  const downloadStream = got.stream("https://via.placeholder.com/150");
  const fileWriterStream = fs.createWriteStream("downloaded_image.png");

  downloadStream.pipe(fileWriterStream);

  fileWriterStream.on("finish", () => {
    console.log("Image downloaded successfully.");
  });
})();
