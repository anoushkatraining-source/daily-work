
public class ValidateUtils {
public static boolean ValidateStrings(String Input){
	return (Input!=null && Input.trim().equals(""));
}
public static boolean ValidateNumericInput(float NumericInput) {
	return (NumericInput>0);
	
}
}
