import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class RemoveEmptyLines {

	
	public static void main(String[] args) throws Exception{
		//Read in a file and remove all empty lines
		File file = new File("C:\\Users\\Tze Hei\\Documents\\CourseBulletin.txt");
		File outputFile = new File("C:\\Users\\Tze Hei\\Documents\\CourseBulletinWhiteless.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));
		
		BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile));
	    
		String st;
		while ((st = br.readLine()) != null) {
			if(!st.equals("")) {
				writer.write(st);
				writer.newLine();
			}
			
		}
	    
	    
	    writer.close();
		br.close();
	}
}
