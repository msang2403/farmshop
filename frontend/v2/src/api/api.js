
export const createReview = async (productId, review) => {
	try {
		const { token } = getUserInfo();
		const response = await axios({
			url: `${apiUrl}/api/products/${productId}/reviews`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			data: review,
		});
		if (response.statusText !== 'Created') {
			throw new Error(response.data.message);
		}
		return response.data;
	} catch (err) {
		return { error: err.response.data.message || err.message };
	}
};




// export const createOrder = async (order) => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders`,
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       data: order,
//     });
//     if (response.statusText !== 'Created') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     return { error: err.response ? err.response.data.message : err.message };
//   }
// };
// export const getOrders = async () => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders`,
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.statusText !== 'OK') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return { error: err.response.data.message || err.message };
//   }
// };
// export const deleteOrder = async (orderId) => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders/${orderId}`,
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.statusText !== 'OK') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     return { error: err.response.data.message || err.message };
//   }
// };
// export const getOrder = async (id) => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders/${id}`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.statusText !== 'OK') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     return { error: err.message };
//   }
// };
// export const getMyOrders = async () => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders/mine`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.statusText !== 'OK') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     return { error: err.response ? err.response.data.message : err.message };
//   }
// };
// export const getPaypalClientId = async () => {
//   const response = await axios({
//     url: `${apiUrl}/api/paypal/clientId`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   if (response.statusText !== 'OK') {
//     throw new Error(response.data.message);
//   }
//   return response.data.clientId;
// };

// export const payOrder = async (orderId, paymentResult) => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders/${orderId}/pay`,
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       data: paymentResult,
//     });
//     if (response.statusText !== 'OK') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     return { error: err.response ? err.response.data.message : err.message };
//   }
// };
// export const deliverOrder = async (orderId) => {
//   try {
//     const { token } = getUserInfo();
//     const response = await axios({
//       url: `${apiUrl}/api/orders/${orderId}/deliver`,
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (response.statusText !== 'OK') {
//       throw new Error(response.data.message);
//     }
//     return response.data;
//   } catch (err) {
//     return { error: err.response ? err.response.data.message : err.message };
//   }
// };
export const getSummary = async () => {
	// try {
	// 	const { token } = getUserInfo();
	// 	const response = await axios({
	// 		url: `${apiUrl}/api/orders/summary`,
	// 		headers: {
	// 			'Authorization': `Bearer ${token}`,
	// 			'content-type': 'application/json',
	// 		},
	// 	});
	// 	if (response.statusText !== 'OK') {
	// 		throw new Error(response.data.message);
	// 	} else {
	// 		return response.data;
	// 	}
	// } catch (err) {
	// 	return {
	// 		error: err.response ? err.response.data.message : err.message,
	// 	};
	// }
};