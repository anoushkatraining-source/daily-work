
class Book {
	String id;
	String title;
	float price;
	String author;

	public Book(String id, String title, float price, String author) {
		if (ValidateUtils.ValidateStrings(author) || ValidateUtils.ValidateStrings(title)
				|| ValidateUtils.ValidateStrings(id)) {
			throw new IllegalArgumentException("Invalid input");
		}
		this.id = id;
		this.title = title;
		this.price = price;
		this.author = author;
		this.status = STATUS.AVAILABLE;
	}

	public Book(String string, STATUS available) {
		// TODO Auto-generated constructor stub
	}

	private STATUS status;

	public STATUS getStatus() {
		return status;
	}

	public void setStatus(STATUS status) {
		this.status = status;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getAuthor() {
		return author;
	}

	@Override
	public String toString() {
		String result = """
				ID: %s
				Book: %s
				Author: %s
				Price: %.2f
				Status: %s""".formatted(id, title, author, price, status);
		return result;
	}

	public void setId(Object object) {
		// TODO Auto-generated method stub

	}
}