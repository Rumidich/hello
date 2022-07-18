import { Box, Container, ImageList } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { getProducts, products, pages, getLikes } =
    useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <Container>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        flexDirection={"row"}
        marginTop={"40px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          className="pagination"
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          variant="outlined"
          color="warning"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
