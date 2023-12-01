const logNumberOfPosts = () => {
  const postContainers = document.querySelectorAll("#post");
  const numberOfPosts = postContainers.length;

  console.log(`Number of posts: ${numberOfPosts}`);
};
logNumberOfPosts();

//---------------------------------------------------------------------------

const logAverageHeightOfPost = () => {
    const postContainers = document.querySelectorAll("#post");
    let totalHeight = 0;

    postContainers.forEach(post => {
        totalHeight += post.offsetHeight;
    });

    const numberOfPosts = postContainers.length;
    const averageHeight = numberOfPosts > 0 ? totalHeight / numberOfPosts : 0;

    console.log(`Average post height: ${averageHeight}px`);
};

logAverageHeightOfPost();

//---------------------------------------------------------------------------

const logSumOfTitleLengths = () => {
    const postContainers = document.querySelectorAll("#post");
    let sumOfTitleLengths = 0;
  
    postContainers.forEach(post => {
      const titleElement = post.querySelector('.main__container-heading');
      const titleText = titleElement.textContent.trim();
      sumOfTitleLengths += titleText.length;
    });
  
    console.log(`Sum of post title lengths: ${sumOfTitleLengths}`);
  };
  
  logSumOfTitleLengths();
  
//---------------------------------------------------------------------------


const postContainers = document.querySelectorAll("#post");

postContainers.forEach(post => {
  post.addEventListener('click', () => {
    const titleElement = post.querySelector('.main__container-heading');
    const tagElement = post.querySelector('.main__container-tag');
    const datetimeElement = post.querySelector('.main__container-datetime');

    const title = titleElement.textContent.trim();
    const tag = tagElement.textContent.trim();
    const datetime = datetimeElement.textContent.trim();
    const length = title.length;

    console.log(`Clicked Post Info: 
      Name: ${title}
      Date: ${datetime}
      Length: ${length}`);
  });
});

//---------------------------------------------------------------------------


const socialLinksContainer = document.querySelector('.main__sidelinks');

window.addEventListener('scroll', () => {
  const containerRect = socialLinksContainer.getBoundingClientRect();
  const viewportPosition = containerRect.top;
  const documentPosition = containerRect.top + window.scrollY;

  console.log(`Viewport Position: ${viewportPosition}px`);
  console.log(`Document Position: ${documentPosition}px`);
});


