import React from 'react';
import axios from 'axios';
import { Descriptions,Card, Row, Col, Collapse, Icon, Table, Input, Button, Modal, List, Typography} from 'antd';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const { Search } = Input;



const data = [];



class ScholarDetail extends React.Component {



  state = {
    scholar:[],
    visible: false ,
    value: '',
    copied: false, 
    data: [],
    
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };



  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      copied: false
    });
  };


  componentDidMount() {
    const scholarurl = this.props.match.params.scholarurl;
    axios.get(`http://127.0.0.1:8000/api/metrics/${scholarurl}/`)
    .then(res =>{
      this.setState({
        scholar: res.data,
      });
      console.log(res.data);
    })
  };




  render(){
    const { Panel } = Collapse;
    const customPanelStyle = {
		  background: '#f7f7f7',
		  borderRadius: 4,
		  marginBottom: 24,
		  border: 0,
		  overflow: 'hidden',
    };
    const columns = [{
      title: 'Publication Title',
      dataIndex: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];

    for (let i = 0; i < 46; i++) {
      this.state.data.push({
        key: i,
        name: String(this.state.scholar["publication_title"]).split("\n")[i],
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    
    function onChange(pagination, sorter, extra) {
      console.log('params', pagination,sorter, extra);
    };

    return(
      <div>

        <Row >
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <div style={{textAlign: 'center',padding:'40px'}}>
              <img
                width={220}
                height={220}
                alt="scholar img"
                src={"https://scholar.google.com.au/citations?view_op=view_photo&user="+this.state.scholar.profile_url+"&citpid=2"}
                style ={{objectFit:'cover', borderRadius:'50%'}}
                />
                <br/>
                <span style={{backgroundColor: 'teal', color:'white', fontSize:'20px'}}>{this.state.scholar.author_name}</span>
                <br/>

                {/*Code for Modal, don't try to debug it out of your reach..*/}

                <Button type="secondary" onClick={this.showModal} style={{backgroundColor:'grey', color:'white'}} shape="circle" size="large">
                  <Icon type="share-alt" style={{fontSize: 30}}/>
                </Button>

               <Modal
                  title="Share Profile"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  width="700px"
                  footer={[
                      <Button key="back" onClick={this.handleCancel}>
                        Cancel
                      </Button>
                      
                    ]}
                >
                  <TwitterShareButton  url={window.location.href} onClick = {this.handleCancel}>
                    <TwitterIcon size={64} />
                  </TwitterShareButton>
                 <FacebookShareButton  url={window.location.href}  onClick = {this.handleCancel}>
                    <FacebookIcon size={64} />
                  </FacebookShareButton>
                  <LinkedinShareButton  url={window.location.href}  onClick = {this.handleCancel}>
                    <LinkedinIcon size={64}/>
                  </LinkedinShareButton>
                  <EmailShareButton  url={window.location.href}  onClick = {this.handleCancel}>
                    <EmailIcon size={64} />
                  </EmailShareButton>
                  <WhatsappShareButton  url={window.location.href}  onClick = {this.handleCancel}>
                    <WhatsappIcon size={64} />
                  </WhatsappShareButton>
                  <br/>

                  <Input value={window.location.href}
                    onChange={({target: {value}}) => this.setState({value, copied: false})} style={{width: '85%'}}/>
           
                  <CopyToClipboard text={window.location.href}
                    onCopy={() => this.setState({copied: true})}>
                    <Button type="primary" style ={{backgroundColor: '#5c5953'}}>
                     <Icon type="copy" />Copy
                    </Button>
                  </CopyToClipboard>
 
 
                    {this.state.copied ? <span style={{color: 'green'}}>Text copied to clipboard</span> : null}

                  </Modal>

            </div>
          </Col>

          <Col xs={24} sMortality in randomized trials of antioxidant supplements for primary and secondary preventionm={24} md={24} lg={18} xl={18}>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
            <Panel header="Scholar Information" key="1" style={customPanelStyle}>
              <Descriptions  bordered>
                <Descriptions.Item label="Name" span={2}>{this.state.scholar.author_name}</Descriptions.Item>
                <Descriptions.Item label="Country">{this.state.scholar.country}</Descriptions.Item>
                <Descriptions.Item label="University" span={2}>{this.state.scholar.Company}</Descriptions.Item>
                <Descriptions.Item label="Register time">2020-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="TNCc" span={1}>
                  {this.state.scholar.TNCc}
                </Descriptions.Item>
                <Descriptions.Item label="h-index" span={1}>
                  {this.state.scholar.Hindex}
                </Descriptions.Item>
                <Descriptions.Item label="o-index" span={1}>
                  {this.state.scholar.Oindex}
                </Descriptions.Item>
                <Descriptions.Item label="m-index" span={1}>
                  {this.state.scholar.Mindex}
                </Descriptions.Item>
                <Descriptions.Item label="g-index" span={1}>
                  {this.state.scholar.Gindex}
                </Descriptions.Item>
                <Descriptions.Item label="h-median" span={1}>
                  {this.state.scholar.Hmedian}
                </Descriptions.Item>
                <Descriptions.Item label="Website"><a href="https://codexmaze.blogspot.com">{this.state.scholar.Website}</a></Descriptions.Item>
              </Descriptions>
            </Panel>
            </Collapse>
          </Col>
			  </Row>

           {/* table component */}
        <div>


        <List
          header={<div><b>Publication Title</b></div>}
          bordered
          dataSource={String(this.state.scholar["publication_title"]).split('\n,')}
          renderItem={item => (
            <List.Item>
               {item}
            </List.Item>
          )}
        />



         {String(this.state.scholar["publication_title"]).split('\n,').map(e => {
          return <li>{e}</li>
         } )}

          <Table  columns={columns} dataSource={this.state.data} />
          
        </div>

      </div>
    );
  }
}

export default ScholarDetail;
