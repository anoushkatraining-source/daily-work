package com.example.demo.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
//import io.swagger.v3.oas.models.media.MediaType;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;
import com.example.demo.service.NoteService;
import com.fasterxml.jackson.databind.ObjectMapper;
@WebMvcTest(NoteController.class)
public class NoteControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private Order1Repository order1Repository1;
	@MockBean
	private NoteService noteService;
	@Autowired
    private ObjectMapper objectMapper;
	private Order1 testOrder;
	private OrderLine testOrderLine;

	@BeforeEach
	public void setUp() {
		testOrderLine = new OrderLine();
		testOrderLine.setId(1);
		testOrderLine.setItem("Laptop");
		testOrderLine.setPrice(999.99F);
		testOrderLine.setQuantity(1);

		testOrder = new Order1();
		testOrder.setId(1);
		testOrder.setOrderLines(Arrays.asList(testOrderLine));
		testOrderLine.setOrder1(testOrder);
	}
@Test
public void testGetOrderByIdForSuccessfulFetch() throws Exception{
	when(noteService.getOrderById(1)).thenReturn(Optional.of(testOrder));
	mockMvc.perform(get("/order/1")
	       .contentType(MediaType.APPLICATION_JSON))
	       .andExpect(status().isOk())
           .andExpect(jsonPath("$.id").value(1))
           .andExpect(jsonPath("$.orderLines[0].item").value("Laptop"))
           .andExpect(jsonPath("$.orderLines[0].price").value(999.99f));
          // .andExpect(jsonPath("$.orderLines[0].quantity").value(1));
   verify(noteService, times(1)).getOrderById(1);
}

@Test
public void testGetOrderByIdForNonExistentId() throws Exception{
	when(noteService.getOrderById(999)).thenReturn(Optional.empty());
	mockMvc.perform(get("/order/999")
			.contentType(MediaType.APPLICATION_JSON))
	.andExpect(status().isNotFound());
	verify(noteService, times(1)).getOrderById(999);
	}

@Test
public void testGetOrderForSuccessfulFetchOfAllOrders() throws Exception {
List<Order1> orders=Arrays.asList(testOrder);
when(noteService.getOrder()).thenReturn(orders);
mockMvc.perform(get("/order")
		.contentType(MediaType.APPLICATION_JSON))
.andExpect(status().isOk())
.andExpect(jsonPath("$[0].id").value(1))
//.andExpect(jsonPath("$[0].shippingAddress.street").value("123 Main St"))
.andExpect(jsonPath("$.length()").value(1));
verify(noteService, times(1)).getOrder();

}
@Test
public void testGetOrdersForEmptyOrders() throws Exception{
	when(noteService.getOrder()).thenReturn(Arrays.asList());
	mockMvc.perform(get("/order")
	.contentType(MediaType.APPLICATION_JSON))
	.andExpect(status().isOk())
    .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(0)));
}
@Test
public void testCreateOrderForSuccessfullCreation() throws Exception{
when(noteService.addOrder(any(Order1.class))).thenReturn(1);
mockMvc.perform(post("/order")
		 .contentType(MediaType.APPLICATION_JSON)
         .content(objectMapper.writeValueAsString(testOrder)))
         .andExpect(status().isCreated())
         .andExpect(content().string("1"));
 verify(noteService, times(1)).addOrder(any(Order1.class));
}
@Test
public void testCreateOrderForEmptyOrderLines() throws Exception{
	Order1 invalidOrder = new Order1();
   // invalidOrder.setShippingAddress(testAddress);
    invalidOrder.setOrderLines(null);
    mockMvc.perform(post("/order")
            .contentType(MediaType.APPLICATION_JSON)
            .content(objectMapper.writeValueAsString(invalidOrder)))
            .andExpect(status().isBadRequest());
    verify(noteService, never()).addOrder(any(Order1.class));

}

}
