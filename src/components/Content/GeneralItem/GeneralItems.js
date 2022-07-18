import { Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { fetchSearchData } from "../../../store/action/search-action";
import { searchAction } from "../../../store/slice/search-slice";

import React from "react";
import Card from "../../UI/Card";
import ContentGeneralItem from "./ContentGeneralItem";
import styles from "./GeneralItems.module.css";
import useQuery from "../../../hooks/useQuery";

export default function GeneralItems({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const seeAllHandler = () => {
    // <Navigate to={`image?search=${query.get("search")}`} />
    // navigate(`image?search=${query.get("search")}`);
    dispatch(searchAction.changeCategory("Image"));
    dispatch(fetchSearchData(query.get("search"), "image"));
  };

  return (
    <Stack>
      <Stack
        direction="horizontal"
        gap={3}
        className={styles["image-carousel"]}
      >
        {data.images.status.current === "success" ? (
          <Stack direction="horizontal" gap={1}>
            {data?.images?.data?.map((img) => (
              <img src={img.image.src} />
            ))}
          </Stack>
        ) : (
          <p>Loading...</p>
        )}
        {/* <Link to={`image?search=${query.get("search")}`}>
          <div className={styles["lihat-semua"]} onClick={seeAllHandler}>
            <div className={styles.icon}>
              <i className="fa-solid fa-angle-right" />
            </div>
            <p>Lihat semua</p>
          </div>
        </Link> */}
      </Stack>
      {data.site.map((content) => (
        <Card>
          <ContentGeneralItem content={content} />
        </Card>
      ))}
    </Stack>
  );
}
