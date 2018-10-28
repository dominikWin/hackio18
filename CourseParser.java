import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.util.ArrayList;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

public class CourseParser {

	public static void main(String[] args) throws Exception{

		//Read in a file without empty lines
		File file = new File("C:\\Users\\Tze Hei\\Documents\\CourseBulletinWhiteless.txt");

		BufferedReader br = new BufferedReader(new FileReader(file));
		ArrayList<String> name = new ArrayList<String>();
		ArrayList<String> desc = new ArrayList<String>();
		ArrayList<String> hours = new ArrayList<String>();
		ArrayList<String> prereqs = new ArrayList<String>();
		ArrayList<String> output = new ArrayList<String>();
		
		String[] columns = {"Name","Title","Description","Prereqs"}; 

		String pattern = "(\\d\\d\\d\\d)";
		String st = br.readLine(),prereqSt = "",department = "",outline = "";
		boolean found = false,foundDesc = false,start = false;
		while (st != null) {
			
			if (st.contains("++")) {
				department = st.replace("+","");
				start = true;
			} 
			if (start) { 
				if (st.matches(pattern)) {
				
			    output.add(outline);
				outline = "";
					
			    outline = outline + department + " " + st + "titleend" + " " + br.readLine();
		        name.add(department + " " + st);
			    desc.add(br.readLine());
				found = false;
				foundDesc = false;
					
				}else if (st.contains("Prereq:")) {
					outline = outline + " " + st;
					found = true;
					foundDesc = false;
				} else if (foundDesc) {
					//outline += st;
				} else if (st.length() == 1 && (st.charAt(0) == 'U' || st.charAt(0) == 'G')) {
	//				outline = outline + " Standing: " + st;
	//				outline = outline + "Credit Hours: " + br.readLine();
					hours.add("Credit Hours: " + br.readLine());		
					foundDesc = true;
					//outline += "Desc: ";
				} else if (found) {
					outline += st;
				}
			}
			st = br.readLine();

		}
		output.remove(0);
		for (int i = 0; i <10; i++) {
			System.out.println(output.get(i));
		}
	
		// Create a Workbook
        Workbook workbook = new HSSFWorkbook(); // new HSSFWorkbook() for generating `.xls` file

        /* CreationHelper helps us create instances of various things like DataFormat, 
           Hyperlink, RichTextString etc, in a format (HSSF, XSSF) independent way */
        CreationHelper createHelper = workbook.getCreationHelper();

        // Create a Sheet
        Sheet sheet = workbook.createSheet("Courses");

        // Create a Row
        Row headerRow = sheet.createRow(0);

        // Create cells
        for(int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);
        }

        // Create Other rows and cells with employees data
        int rowNum = 1;
        int titleEnd;
        for(String str : output) {
            Row row = sheet.createRow(rowNum++);

            row.createCell(0)
                    .setCellValue(str.substring(0,str.indexOf("titleend")));

            
            if (str.indexOf("Prereq") == -1) {
            	titleEnd = str.length();
            } else {
            	titleEnd = str.indexOf("Prereq");
            }
            row.createCell(1)
                    .setCellValue(str.substring(str.indexOf("titleend") + "titleend".length(),titleEnd));

            row.createCell(2).setCellValue("");

            if (str.indexOf("Prereq") != -1) {
            	titleEnd += "prereq:".length();
            }
            row.createCell(3)
                    .setCellValue(str.substring(titleEnd,str.length()));
        }

		// Resize all columns to fit the content size
        for(int i = 0; i < columns.length; i++) {
            sheet.autoSizeColumn(i);
        }

        // Write the output to a file
        FileOutputStream fileOut = new FileOutputStream("courses.xls");
        workbook.write(fileOut);
        fileOut.close();

        // Closing the workbook
        workbook.close();
        System.out.println("Done");
	}
}
