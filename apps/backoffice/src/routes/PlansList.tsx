import React, { useEffect, useState } from 'react';
import { Button, Card, Layout, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

type Plan = {
  SK: string;
  PK: string;
  date: string[];
  planNote: string;
};

const PlansList = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>();

  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    const resp = await axios.get('http://localhost:8080/api/plan/list');
    if (resp.status === 200) {
      setPlans(resp.data);
    }
  };

  const redirectCreator = () => {
    navigate('/plans/create');
  };

  return (
    <>
      <Title level={2}>Plans</Title>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          borderRadius: '8px',
          background: 'white',
        }}
      >
        <Button onClick={redirectCreator} type="primary" style={{ marginBottom: 12 }}>
          <PlusCircleOutlined />
          <span>Create New Plan</span>
        </Button>

        {plans?.map((plan: Plan) => (
          <Card hoverable style={{ width: 300 }}>
            <Meta title={plan.PK} description={plan.planNote} />
          </Card>
        ))}
      </Content>
    </>
  );
};

export default PlansList;