import React from "react";
import { useParams } from "react-router-dom";
import listNews from "./listNews";
import CardImg1 from "../../assets/img/blog1.b51064e946b80523f448.jpg";
import CardImg2 from "../../assets/img/blog2.61095c5f1f96db1b0497.jpg";
import CardImg3 from "../../assets/img/blog3.952f7b68aebcaa01cf8d.jpg";
export default function NewsPage() {
  const { href } = useParams();
  console.log(href)
  const list = [
    {
      cardImg: CardImg1,
      cardTitle: "Cras accumsan nulla nec lacus ultricies placerat.",
      cardText:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      cardDate: "21 March 2021",
      href:'post1'
    },
    {
      cardImg: CardImg2,
      cardTitle: "Cras accumsan nulla nec lacus ultricies placerat.",
      cardText:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      cardDate: "21 March 2021",
    },
    {
      cardImg: CardImg3,
      cardTitle: "Cras accumsan nulla nec lacus ultricies placerat.",
      cardText:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      cardDate: "21 March 2021",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="border">
        {list &&
          list.map((item, index) => {
            if (item.href == href) {
              return (
                <div key={index}>
                  <div>
                    <img src={item.cardImg} alt="" />
                  </div>
                  <div className="py-2 text-bold text-3xl">{item.cardTitle}</div>
                  <div>
                    {item.description &&
                      item.description.map((x, y) => {
                        return (
                          <p className="mt-4 text-xl font-normal">{x.text}</p>
                        );
                      })}
                  </div>
                  <div className="flex  w-full border">
                    {item.images &&
                      item.images.map((a, b) => {
                        return <img className="border w-1/4" src={a} alt="" />;
                      })}
                  </div>
                </div>
              );
            }
          })}
      </div>
      <div className="border"></div>
    </div>
  );
}
