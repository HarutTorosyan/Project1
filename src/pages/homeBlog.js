import React from "react";
import Title from "./repeatable/title";
import CardImg1 from "../assets/img/blog1.b51064e946b80523f448.jpg";
import CardImg2 from "../assets/img/blog2.61095c5f1f96db1b0497.jpg";
import CardImg3 from "../assets/img/blog3.952f7b68aebcaa01cf8d.jpg";
import NewsCard from "./repeatable/BlogCard";

export default function HomeBlog() {
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
    <>
      <div className="max-w-screen-xl mx-auto py-20">
        <Title title="OUR BLOG" bigTitle="Latest Blog & News" />

        <div className="flex max-md:flex-col md:space-x-6 mt-16  max-md:space-y-8 items-center justify-center px-4 sm:px-16 xl:px-0">
          {list &&
            list.map((item, index) => {
              return (
                <NewsCard
                  cardImg={item.cardImg}
                  cardTitle={item.cardTitle}
                  cardText={item.cardText}
                  cardDate={item.cardDate}
                  href={item.href}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
