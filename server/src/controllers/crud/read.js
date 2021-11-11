import sequelize from '../../models';
const { Inquiry, Image, Comment } = sequelize;

const inquiryPost = page => {
  switch (page) {
    case 'board':
      return 'CommunityId';
    case 'donation':
      return 'DonatePostId';
    case 'suggestion':
      return 'SuggestPostId';
    case 'notice':
      return 'NoticeId';
    case 'acquisition':
      return 'CertPostId';
    case 'awards':
      return 'AwardPostId';
    case 'portfolio':
      return 'PortfolioPostId';
    default:
      return null;
  }
}

const readPost = (req, res, next) => {
  return async schema => {
    const { id } = req.params;

    const redirectUrl = req.originalUrl
      .match(/\/[a-z]+/)
      .join('');

    const pageUrl = req.originalUrl
      .match(/(?<=\/.*\/)[a-z]+/)
      .join('');

    const inquiryKey = inquiryPost(pageUrl);
    try {
      const post = await schema.findOne({
        where: { id },
        include: [{
          model: Image,
          attributes: ['src'],
        }, {
          model: Inquiry,
          attributes: ['count'],
        }],
      });
      const inquiry = await Inquiry.findOne({
        where: { [inquiryKey]: id }
      });
      await Inquiry.update({ count: inquiry.dataValues.count + 1}, {
        where: { [inquiryKey]: id },
      });

      const comments = await Comment.findAll({
        where: { [inquiryKey]: id }
      });

      const accessUser = req.user?.id || 'Anonymous';
      // req.originalUrl 로 대체가 가능해 보임
      res.render(`import${redirectUrl}/postView`, {
        post,
        referrer: req.originalUrl,
        accessUser,
        comments
      });

    } catch (err) {
      console.log('acquisitionPost Error');
      console.error(err);
      next(err);
    }
  };
}

export default readPost;