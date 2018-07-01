import { DatePicker } from 'antd';
import moment from 'moment';
import React, {Component} from 'react';
import {Card, Row, Col, Form, Input, Button, Select } from 'antd' ;
const FormItem = Form.Item;

const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

class WorkoutAdd extends Component {
	
	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (

            <div>
			
			<Card className="my-4" style={{ width:700, }}>
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<Row>
						<Col span={8}>
							<h4>Add New Events</h4>
						</Col>
						<Col span={8} offset={8}>
							<div className="float-right">
								<FormItem>
							        <Button
							        	style={{marginRight: '1.2rem'}}
							        	type="primary"
							            htmlType="submit"
							        >
							            Submit
							        </Button>
									<Button
									
							        	type="danger"
							            htmlType="submit"
							        >
							        	Delete
							        </Button>
							    </FormItem>
							</div>
						</Col>
					</Row>

                    <hr />

                    <Row>
						<Col span={11}>
                            <FormItem
                                className= "eventtitle"
						        label="Event Title"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('EventTitle', {
					         	rules: [{ required: true, message: 'Please input Event Title!' }],
						    })(
						        <Input placeholder="Event Title" />
						    )}
                            </FormItem>
                    
						</Col>

                        
						<Col span={11} >
                            <FormItem
                                className= "college"
						        label="College Name"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('CollegeName', {
                                rules: [{ required: true, message: 'Please input College Name!' }],
                           })(
						        <Input placeholder="College Name" />
						    )}
						    </FormItem>
						</Col>
                        </Row>

                        <Row>
						<Col span={11}>
                            <FormItem
                                className= "eventdescription"
						        label="Event Description"
						        colon={true}
						        wrapperCol={{span: 23}}
						    >
                            {getFieldDecorator('EventDescription',{
                            rules: [{ required: true, message: 'Please input Event Description!' }],
                           })
                        (
      <TextArea placeholder="Event Description" autosize={{ minRows: 1, maxRows: 10 }} style={{width: '100%'}}/>
    )}
						    </FormItem>
                        </Col>


						<Col span={11}>
						<FormItem
						   label= "Select Event Date"
						   colon={true}
						   wrapperCol={{span: 24}}
					   >
					   {getFieldDecorator('selecteventdate', {
						   initialValue: "Select",
						   rules:[{required: true, message: "Please select a Event Date"}]
						})(
						<div>
							<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
						</div>
					   )}
					   </FormItem>
				   </Col>
                        </Row>


                        <Row>
						<Col span={11}>
							<FormItem
						        label="Event Link"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('link', {
                                rules: [{ required: true, message: 'Please Input Event Link!' }],
                           })(
						        <Input placeholder="link" />
						    )}
						    </FormItem>
                        </Col>
						
						</Row>

                                        
                    </Form>
                    </Card>
				
					
</div>


        );
    }
}
const EventNewForm = Form.create()(WorkoutAdd);
export default EventNewForm;