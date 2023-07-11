/*here is the Java program that creates a file called MUT.txt 
and writes the following text to the file: "Innovation for prosperity":*/
import java.io.File;
import java.io.FileWriter;

public class CreateFile {

    public static void main(String[] args) throws Exception {
        // Create a file called MUT.txt
        File file = new File("MUT.txt");

        // Create a FileWriter object to write to the file
        FileWriter writer = new FileWriter(file);

        // Write the text "Innovation for prosperity" to the file
        writer.write("Innovation for prosperity");

        // Close the FileWriter object
        writer.close();
    }
}