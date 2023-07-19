const Intro = () => {
  return (
    <>
      <div
        style={{
          padding: "7%",
          paddingBottom: 0,
          backgroundColor: "#f2f2f2",
          //   display: "flex",
          //   flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <h2
            id="whyUs"
            className="flex text-2xl md:text-5xl text-center mb-[50px] items-center justify-start w-[45%]"
          >
            Why VivaVintage
          </h2>
          <div className="md:text-3xl text-base w-[55%]">
            <ul style={{ listStyleType: "none" }}>
              <li
                style={{
                  borderBottom: "1px solid grey",
                  width: "83%",
                  marginBottom: "20px",
                }}
              >
                EXCLUSIVE STYLES
                <br />
                timeless collection of vintage clothing
              </li>
              <li
                style={{
                  borderBottom: "1px solid grey",
                  width: "83%",
                  marginBottom: "20px",
                }}
              >
                ECO-FRIENDLY
                <br />
                embrace sustainability
              </li>
              <li
                style={{
                  borderBottom: "1px solid grey",
                  width: "83%",
                  marginBottom: "20px",
                }}
              >
                PERSONALIZED
                <br />
                we are didicated to provide the best service for you
              </li>
              <li style={{ borderBottom: "1px solid grey", width: "83%" }}>
                ALL SIZE
                <br />
                we believe in the perfect fit for everyone
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div
        style={{
          padding: "7%",
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <h2
            id="about"
            className="flex text-2xl md:text-5xl text-center mb-[50px] items-center justify-start w-[45%]"
          >
            About us
          </h2>
          <p className="md:text-3xl text-base w-[45%] text-justify">
            Started by fashion enthusiasts at 2023, our vintage clothing store
            transports you back in time with its stylishly curated collection.
            We prioritize quality and authenticity. Each item in our collection
            is carefully inspected to ensure that it meets our high standards.
            We believe that embracing classic styles is a way to express your
            unique taste.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
