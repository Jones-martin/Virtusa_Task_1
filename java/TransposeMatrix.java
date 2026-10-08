import java.util.Scanner;

public class TransposeMatrix {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter col and row :");
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] l = new int[n][m];
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                l[i][j]=sc.nextInt();
            }
        }
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                System.out.print(l[i][j]+" ");
                
            }
            System.out.println();
        }
            System.out.println();
            
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                System.out.print(l[j][i]+" ");
            }
            System.out.println();
        }

    }
}
