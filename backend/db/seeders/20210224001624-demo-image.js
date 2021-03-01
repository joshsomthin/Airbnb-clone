"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          spotId: 1,
          imageUrl: "https://eventective-media.azureedge.net/2007315_lg.jpg",
        },
        {
          spotId: 1,
          imageUrl:
            "https://uploads.visitseattle.org/2018/03/01012353/Rhein-Haus-Bocce-Court-Clock-View_631e5652-5056-a36a-08a74121c8d1c065.jpg",
        },
        {
          spotId: 1,
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/10/b7/6c/71/the-rhein-haus-seattle.jpg",
        },
        {
          spotId: 1,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruYSLRw9cZtp4dIssrw9b3TnX5Yx6AngvNQ&usqp=CAU",
        },
        {
          spotId: 2,
          imageUrl: "https://i.ytimg.com/vi/t1wGabBTcgw/maxresdefault.jpg",
        },
        {
          spotId: 2,
          imageUrl:
            "https://www.fodors.com/wp-content/uploads/2018/04/Space-Needle-101-HERO.jpg",
        },
        {
          spotId: 2,
          imageUrl:
            "https://media.cntraveler.com/photos/5b4e1678b6801415eae751e8/4:3/w_3448,h_2586,c_limit/Space-Needle_John-Lok_2018_7M7A8665.jpg",
        },
        {
          spotId: 2,
          imageUrl: "https://images.otstatic.com/prod/23713897/1/huge.jpg",
        },
        {
          spotId: 3,
          imageUrl:
            "https://www.chihulygardenandglass.com/img/_1200x630_crop_center-center_82_none/03_exhibtion_rotator_05.jpg",
        },
        {
          spotId: 3,
          imageUrl:
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/c1/84.jpg",
        },
        {
          spotId: 3,
          imageUrl:
            "https://www.chihulygardenandglass.com/static/ee_images/uploads/headers/_1200x630_crop_center-center_82_none/03_exhibtion_rotator_01.jpg",
        },
        {
          spotId: 3,
          imageUrl:
            "https://mediaim.expedia.com/localexpert/193672/aff20647-a539-4f3a-8afb-d426accfe77d.jpg",
        },
        {
          spotId: 4,
          imageUrl:
            "https://a0.muscache.com/im/pictures/f8849438-bc36-40ba-93cc-696f73a35d3f.jpg",
        },
        {
          spotId: 4,
          imageUrl:
            "https://a0.muscache.com/im/pictures/fa2c00b3-6849-47e4-a756-2e6fb1b8b84a.jpg",
        },
        {
          spotId: 4,
          imageUrl:
            "https://a0.muscache.com/im/pictures/f8849438-bc36-40ba-93cc-696f73a35d3f.jpg",
        },
        {
          spotId: 5,
          imageUrl:
            "https://cache.marriott.com/marriottassets/marriott/SEAWH/seawh-living-room-0918-hor-wide.jpg",
        },
        {
          spotId: 5,
          imageUrl:
            "https://cf.bstatic.com/images/hotel/max1024x768/679/67962046.jpg",
        },
        {
          spotId: 5,
          imageUrl:
            "https://cache.marriott.com/marriottassets/marriott/SEAWH/seawh-living-room-0916-hor-feat.jpg",
        },
        {
          spotId: 6,
          imageUrl: "https://i.ytimg.com/vi/udvCwmbuCxw/maxresdefault.jpg",
        },
        {
          spotId: 6,
          imageUrl:
            "https://d302e0npexowb4.cloudfront.net/wp-content/uploads/2019/12/11130225/seattle-aquarium-ocean-pavilion-interior-e1576069381703.jpg",
        },
        {
          spotId: 6,
          imageUrl:
            "https://img1.10bestmedia.com/Images/Photos/35659/p-seattle-aquarium-seattle-wa-usa-attractions-best-attractions-activities-aquariums-219264_55_660x440_201405301609.jpg",
        },
        {
          spotId: 7,
          imageUrl:
            "https://intentionalist.com/wp-content/uploads/2018/02/5a737022ea3d550001545213_Linda27s20Tavern-1024x768.jpg",
        },
        {
          spotId: 7,
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/LIhKWpruR6BAUkC5ZMRs9Q/l.jpg",
        },
        {
          spotId: 7,
          imageUrl:
            "https://i2.wp.com/www.capitolhillseattle.com/wp-content/uploads/2019/02/Lindas25th-2-600x400.jpg",
        },
        {
          spotId: 7,
          imageUrl:
            "https://s3-media0.fl.yelpcdn.com/bphoto/7m6Bn0Qgy9gcY4briOHnPw/l.jpg",
        },
        {
          spotId: 8,
          imageUrl:
            "https://static.seattletimes.com/wp-content/uploads/2018/12/12192018_tmobile3_090716-1560x878.jpg",
        },
        {
          spotId: 8,
          imageUrl:
            "https://thestadiumreviews.com/wp-content/uploads/2019/03/T-Mobile-Park-Aerial-View.jpg",
        },
        {
          spotId: 8,
          imageUrl:
            "https://www.ballparksofbaseball.com/wp-content/uploads/2016/06/glf20-952.jpeg",
        },
        {
          spotId: 8,
          imageUrl:
            "https://mcdn.gamestub.com/x450/t-mobile-park-hella-mega-tour-36433.jpg",
        },
        {
          spotId: 8,
          imageUrl:
            "https://thestadiumreviews.com/wp-content/uploads/2019/03/Safeco-Field-T-Mobile-Park-Aerial-View.jpg",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
