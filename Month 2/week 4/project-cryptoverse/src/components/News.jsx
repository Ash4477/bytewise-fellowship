import { Typography, Row, Col, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from  '../services/cryptoNewsApi';
import Loader from './Loader';

const { Text, Title } = Typography;

const demoImage = 'https://images.business.com/app/uploads/2011/06/12131215/Leadership-Skills.png';

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  
  if (!cryptoNews?.results) return <Loader />;

  let { results } = cryptoNews;
  if (simplified) results = results.slice(0,6);

  return (
    <Row gutter={[24, 24]}>
      {results.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={news.id}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.title.length > 50 ? `${news.title.substring(0, 50)}...` : news.title}
                </Title>
                <img
                  style={{ maxWidth: '200px', maxHeight: '100px' }}
                  src={news?.images?.thumbnailProxied || demoImage}
                  alt='news'
                />
              </div>
              <p>
                  {news.title.length > 200 ? `${news.title.substring(0, 200)}...` : news.title}
              </p>
              <div className='provider-container'>
                <div>
                  <Text className='provider-name'>{news.source.title}</Text>
                </div>
                  <Text>
                    {moment(news.created_at).startOf('ss').fromNow()}
                  </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News