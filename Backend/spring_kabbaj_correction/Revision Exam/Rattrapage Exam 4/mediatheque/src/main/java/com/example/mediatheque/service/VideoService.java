package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Video;
import com.example.mediatheque.repo.VideoRepo;

@Service
public class VideoService {
    @Autowired
    private VideoRepo videoRepo;

    public List<Video> getAllVideos() {
        return videoRepo.findAll();
    }

    public Video getVideoById(Long id) {
        return videoRepo.findById(id).orElse(null);
    }

    public Video ajouterVideo(Video video) {
        return videoRepo.save(video);
    }

    public Video modifierVideo(Long id, Video video) throws NotFoundException {
        if (videoRepo.existsById(id)) {
            video.setId(id);
            return videoRepo.save(video);
        }
        throw new NotFoundException("Video not found");
    }

    public void supprimerVideo(Long id) throws NotFoundException {
        if (videoRepo.existsById(id)) {
            videoRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Video not found");
    }
}
