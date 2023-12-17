import { useQuery, useQueryClient, useMutation } from "react-query";
import fetchDataService from "../services/fetchDataService";

const useAllProducts = () => {
  return useQuery([""], fetchDataService.getAllProducts());
};

const useProductById = () => {
  return useQuery([""], fetchDataService.getByProductId());
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return fetchDataService.addProduct();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("");
      },
    }
  );
};




export {
  useCreateProduct,
  useProductById,
  useAllProducts,
};