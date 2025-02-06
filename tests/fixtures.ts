import { ItemSchema } from "../src/utils/schemas";

const testItem: ItemSchema = {
  item_name: "Test Item",
  quantity: 10,
};

const testShelter = {
  name: "Test Shelter",
  location: "123 Test St, Test City, TS",
  email: "test@shelter.com",
  phone: "123-456-7890",
  capacity: 50,
  longitude: -123.456,
  latitude: 45.678,
};

export { testItem, testShelter };
