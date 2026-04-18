package com.example.demo.service; 
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;
@ExtendWith(MockitoExtension.class)
class NoteServiceTest {
	@Mock
	private Order1Repository order1Repository;
	@InjectMocks
	private NoteService noteService;
	@Test
	void testGetAllOrders() {
		Order1 order1 = new Order1();
		order1.setId(1);
		when(order1Repository.findAll()).thenReturn(List.of(order1));
		Iterable<Order1> result = noteService.getOrder();
		assertNotNull(result);
		verify(order1Repository).findAll();
	}
	@Test
	void testGetOrderByIdWhenOrderExists() {
		Order1 order1 = new Order1();
		order1.setId(1);
		when(order1Repository.findById(1)).thenReturn(Optional.of(order1));
		Optional<Order1> result = noteService.getOrderById(1);
		assertTrue(result.isPresent());
		verify(order1Repository).findById(1);
		assertEquals(1, result.get().getId());
	}
	@Test
	void testDeleteOrderById() {
		noteService.deleteOrderById(1);
		verify(order1Repository).deleteById(1);
	}
}