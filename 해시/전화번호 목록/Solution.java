import java.util.HashMap;

class Solution {
    public boolean solution(String[] phone_book) {
        HashMap<Integer, String> map = new HashMap<Integer, String>();
        for (String phone : phone_book) {
            int len = phone.length();
            for (int key : map.keySet()) {
                String getKey = map.get(key);
                if (key < len || (key >= 11 && getKey.length() <= len)) {
                    String str = phone.substring(0, getKey.length());
                    if (str.equals(getKey)) return false;
                } else if (key > len) {
                    String str = getKey.substring(0, phone.length());
                    if (str.equals(phone)) return false;
                }
            }
            if (map.containsKey(len)) {
                do {
                    if (phone.equals(map.get(len))) return false;
                    len *= 11;
                } while (map.containsKey(len));
                map.put(len, phone);
            }
            map.put(len, phone);
        }
        return true;
    }
}