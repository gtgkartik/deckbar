const reviews = [
  {
    author_name: "cai me",
    author_url:
      "https://www.google.com/maps/contrib/110132988779603246610/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMRcixawPyNWvr6d7GHAX2iJwAfRpdjVEXCX51XBww=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "3 years ago",
    text: "Just somewhere northwestern part from downtown area, you'll see this cozy place right beside the main entance of CT Hub.\n\nIf you want to relax, chill, chitchat and catch up with friends, get soothe with a glass or bottle of wine or beer while listening to heart-warming acoustic tunes, this is the place you wouldn't want to miss.\n\n#HappyPeople\n#HappyPlace\n#HappyHut",
    time: 1560676928,
    translated: false,
  },
  {
    author_name: "Sabrina Palileo",
    author_url:
      "https://www.google.com/maps/contrib/111467047741638441836/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMR2zJuUBmtNwWkGTlxJaf2aMDEh4VYQbqPH7uWKpg=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a year ago",
    text: "The food is great and the staff are very friendly and accommodating. The ambience of the bar itself is very chill so it\u2019s a nice place to hang out. The location is also not in a very busy area  that I can enjoy a quiet drink. They are also having live bands these days so it\u2019s really a great bar to grab a drink.",
    time: 1652863333,
    translated: false,
  },
  {
    author_name: "Nil Y (NPC)",
    author_url:
      "https://www.google.com/maps/contrib/116726322732189925035/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMSg95W-3fy7Bc-ysS0RZ_vXaopRF3FJmtTrXptBzg=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 4,
    relative_time_description: "6 months ago",
    text: "Decent price for drinks. It had great live music. Pretty cool place. Ambience is quite nice and it's a nice calm place to chill. The drinks are cheap too. However the food is just okay. The food is great and the staff are very friendly and accommodating. The ambience of the bar itself is very chill so it\u2019s a nice place to hang out.",
    time: 1668174049,
    translated: false,
  },
  {
    author_name: "Saksham Sood",
    author_url:
      "https://www.google.com/maps/contrib/110533568603273725300/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/AD_cMMRn7ReeYyWMd9NaaCv3WHMNJGsgMODLWEDBIcfn6rg=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 3,
    relative_time_description: "4 years ago",
    text: "Ambience is quite nice and it's a nice calm place to chill. The drinks are cheap too. However the food is just okay.",
    time: 1551983355,
    translated: false,
  },
  {
    author_name: "Eng Tiong Tan",
    author_url:
      "https://www.google.com/maps/contrib/107468512968000700440/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/AAcHTtceOMeMfE5Yr0FLNGxF8r37yoLTAcY4evRYUHKH=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a month ago",
    text: "My son says the fish and chips is the best he ever had!!!The food is great and the staff are very friendly and accommodating.",
    time: 1681563832,
    translated: false,
  },
];

const CustomerReview = () => {
  const photos = [
    {
      height: 1816,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0nbUXcBmM5tcU-h8cXE0DKwE-q9liH_zzKs0_E1uX0Aerk6Ad5sfVNzhw_YLDZiyZFZftkywtWUuBnjv0jnCeXbNLw30zg8fSINq0opaNQcl3T_IqHu3aGGfAXrYUEaGYB8YnQiKR59sgX6x2F-07YMkeDZxB_0feB8zjjMHK70O93q",
      width: 4032,
    },
    {
      height: 400,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0m32DufciXrmPjZVfhrwVm4zeCopzNFvZEhqaHCd6yLjlTCA7970PCxOoWz7o6tdIC_mdOdtWjW_F_-Gcey4BavUD4_talhhYvj1x4PFuZKPWcWoVgwdARwClkaw4-V0pyJ468AI8Hbtzg2gKRO7hbMwU2WcRfkKYwMdD3ZfKQ53KYU",
      width: 400,
    },
    {
      height: 4032,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0kvle4ILg94dCELbaGnHSDLyivzEoG9WVyvUaBxsOVAlEI0PXwXUJqCwfSzYLNOcHleD5P6Gq6lJQ1UVNWDUqfB5YDA9HMEArOfl8wm5S_5T9Z-GfEtMYRzLfZncN7alGugRjP8vqjtmehq7EWp74xpGKU8dF2jsDpCK8lUnXtZDEWL",
      width: 3024,
    },
    {
      height: 1744,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0mjWsF0SEtQQskL4vKRdA2c2SVkc1KC1_MfeA608nrOwd_WU-BBIThB4ccRvP3nCWyUPdpimel4BzwTKUdUwhFVL_hsipwn9HFD2gyJuLOpolH6aJUCrOV2QbjmydhWQh4l82kcqcugSRsJ3925MIZt7Mc0NRYU6JrbsGPFsVha2ntb",
      width: 2200,
    },
    {
      height: 1872,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0lZvm-tqSgYiTF_o6z3cVu54wxmWnt2NkmUiR_sojgs-RYXv2Dr3HL7S-u6iuWktZkQ4l3-aeAcb8m10WrpzpusfS60BM53mSGuyvRzsmy8kpdh0I1Ramn9yPOtzIasaCN-oQMsmpDOeyu5A82mE4gzhz3HSZn_6cEFxzLyT-ZBaehk",
      width: 2560,
    },
    {
      height: 2252,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/103331270735393175501"\u003eAlexP Su\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0mcm59nnj_bh3ohBLo9RLvsT7zRB9v3Tc0pxf1AfR7Bv3ZVPrAnOfH0ZI7JjjS_60gXlaicGiQp1fDp5iKtkDDesUaHeojuYnZuwwiJms_Rsi4r7HYAmo8EWbttMrlbd9FWnhTE0pxmyz9Dq-vgxmftO3adCh6zLd_Jx4pliMVrRI85",
      width: 4000,
    },
    {
      height: 400,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0khjqmUZUq3bCQCK7l_jcQAMhHiB-bIFLsi8bfZfCws4PcHp7_Pn2BF2vH8e7vIJaqPr7WpJrwksUJ_a4S2FOIjQuq7aX3jrdwZYDdl24wX1NqzIn2NxzeoMO77ZfQHxj29BdvF1NmgQ8BiR3EsfV1jTvjjDsKqbw8bFXok16A-Y38P",
      width: 400,
    },
    {
      height: 1533,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/100804884110434733086"\u003eSaleem Karimi\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0nppmqiLX0m23rJAKCRK-FTWYrS_muFuPptyKoANUc6OdFob5eptL1bue47DkgGAV2f0OENesXjlkQ6PoCABmQKQU8xswqba7vTNcF_HvUFD6Z5eFKyx4VI7MpbnppG39ooXJG94095LVVmXw5DABCtQMsP9cq1dPJwV5nw2ZlPgcxO",
      width: 2043,
    },
    {
      height: 1200,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0lb7fkC2qoVS05I3nO6PypU1oGzcerNKxcGYMFt_Jqrb3Fzun552btVkoIenBStHx2hj1Axjm18jKnA0aNRcmon7jE4_svv3eDfjG8JN9UIgR0NJnwY329qwHV6IXt8sHbBVDy4SHaBhvCvZiyWLhIKMgXcLOhKD4m-eFaDbquXGxn6",
      width: 1599,
    },
    {
      height: 1287,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/111880125737102328587"\u003eDeck Bar\u003c/a\u003e',
      ],
      photo_reference:
        "AZose0l3BlsvOYEL5nZ3bpw4MBm37jb8vgiKaCEkCP4IG72TnGExvotdwpX9D8zSjldaMfUdd7xSswuH4U--xKkQqlvJGmrdDqNYrd6q5Cz6TcnX8ayUtXGP8jGHkF5yNrLgTSBI4pb0RdvBEzlb_c54Bfpsc7w3P-nZ9gmPO1pa0Sd_7Amh",
      width: 1067,
    },
  ];
  return (
    <>
      <section className="mt-[90px] py-[30px]  bg-[#eeeeee] dark:text-gray-100">
        <div className=" flex flex-col items-center  mb-8 md:p-10 md:px-12">
          <h1 className=" sm:text-2xl md:text-3xl text-black font-libre font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {reviews.map((review) => {
            return (
              <>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg ">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-white ">
                    <p className="relative px-6 py-1 text-lg italic text-center text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-yellow"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {review.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-yellow"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-yellowlight dark:text-gray-900">
                    <img
                      src={review.profile_photo_url}
                      alt=""
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight">
                      {review.author_name}
                    </p>
                    <p className="text-sm uppercase"></p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CustomerReview;
