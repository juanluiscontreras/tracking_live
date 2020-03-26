import api from '../config/api';

const TrackingServices = {
  base: (pickitNumber: string) => api.get(`/apiV2/tracking/base/${pickitNumber}`),
  live: (pickitNumber: string) => api.get(`/apiV2/tracking/base/${pickitNumber}`),
};

export default TrackingServices;
