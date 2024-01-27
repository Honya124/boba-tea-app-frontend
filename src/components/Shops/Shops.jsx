import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ShopItems from "../ShopItems/ShopItems";
// import { shopItemsData } from "../../data/ShopItemsData";
import { useSelector } from "react-redux";
import { selectAllShops } from "../../features/shops/shopsSlice";
import {
  ShopsSection,
  ShopsTitle,
  ShopsWrapper,
  ShopsColumn,
  ShopIconWrapper,
  ShopsTextWrapper,
  ShopsIconText,
  ShopsPaginateWrapper,
} from "./ShopsStyles";
import { ShopsIcons } from "../../data/BobaFlavors";
import BobaFooter from "../Footer/BobaFooter";

function Shops() {
  const getShopsData = useSelector(selectAllShops);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentItemsFlavor, setCurrentItemsFlavor] = useState([]);
  const [currentFlavor, setCurrentFlavor] = useState("all");
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const handleFilterFlavors = (flavor) => setCurrentFlavor(flavor);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    if (currentFlavor.toLocaleLowerCase() === "all") {
      setCurrentItemsFlavor(getShopsData.shopItemsData);
    }

    if (currentFlavor.toLocaleLowerCase() === "fruit tea") {
      setCurrentItemsFlavor(
        getShopsData.shopItemsData.filter(
          (ele) => ele.flavor.toLocaleLowerCase() === "fruit tea"
        )
      );
    }
    if (currentFlavor.toLocaleLowerCase() === "milk tea") {
      setCurrentItemsFlavor(
        getShopsData.shopItemsData.filter(
          (ele) => ele.flavor.toLocaleLowerCase() === "milk tea"
        )
      );
    }
    if (currentFlavor.toLocaleLowerCase() === "smoothes") {
      setCurrentItemsFlavor(
        getShopsData.shopItemsData.filter(
          (ele) => ele.flavor.toLocaleLowerCase() === "smoothes"
        )
      );
    }

    setCurrentItems(currentItemsFlavor.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currentItemsFlavor.length / itemsPerPage));
  }, [
    itemOffset,
    itemsPerPage,
    currentItemsFlavor,
    currentFlavor,
    getShopsData,
  ]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % currentItemsFlavor.length;
    setItemOffset(newOffset);
  };

  return (
    <ShopsSection>
      <ShopsTextWrapper>
        <ShopsTitle>Fresh & Clean</ShopsTitle>
      </ShopsTextWrapper>

      <ShopsWrapper>
        {ShopsIcons.map((icon, index) => (
          <ShopsColumn
            key={index}
            onClick={() => handleFilterFlavors(icon.text)}
            inverse={`${
              currentFlavor.toLocaleLowerCase() ===
              icon.text.toLocaleLowerCase()
                ? "#000"
                : "#b77076"
            }`}
          >
            <ShopIconWrapper>{icon.icon}</ShopIconWrapper>
            <ShopsIconText>{icon.text}</ShopsIconText>
          </ShopsColumn>
        ))}
      </ShopsWrapper>
      <ShopsPaginateWrapper>
        <ReactPaginate
          breakLabel="..." // wata la dway page 3 ... dabne
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination" // unorderedlist  ul wakw conatiner abet
          pageLinkClassName="page-num" // amana wakw link 7sabian lagal akret (1,2,3) zhmarai pagekan
          previousLinkClassName="page-num" // amana wakw link 7sabian lagal akret <
          nextLinkClassName="page-num" //amana wakw link 7sabian lagal akret >
          activeLinkClassName="active"
        />
      </ShopsPaginateWrapper>

      <ShopItems data={currentItems} />
      <BobaFooter />
    </ShopsSection>
  );
}

export default Shops;
