import axios from "axios";

class fetchDataService {

  apiURL: string = "https://run.mocky.io/v3/81df3fe3-9dc2-4c25-a278-de3f8991e3e4"
  
  /**
   * Get all products
   * @returns
   */
  getAllProducts() {
    return () => axios.get(this.apiURL)
      .then(response => response.data);
  }

  /**
   * Get By Id
   * @returns
   */
  getByProductId() {
    return () => axios.get(this.apiURL)
      .then(response => response.data);
  }

  /**
   *To Add a Product
   * @returns
   */
  async addProduct() {
    const res = await axios.post(this.apiURL, {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return res;
  }

}

export default new fetchDataService();