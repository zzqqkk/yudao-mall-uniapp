import request from '@/sheep/request';

const DeliveryApi = {
  // 获得快递公司列表
  getDeliveryExpressList: () => {
    return request({
      url: `/trade/delivery/express/list`,
      method: 'get',
    });
  },
  getPickUpStore: (id) => {
	  return request({
	    url: `/trade/delivery/pick-up-store/get`,
	    method: 'get',
		params: {
		  id,
		},
	  });
  }
};

export default DeliveryApi;
